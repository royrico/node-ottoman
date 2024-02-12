---
sidebar_position: 0
title: Transactions
---

A practical guide on using Couchbase Distributed ACID transactions.

This guide will show you examples of how to perform multi-document ACID (atomic, consistent, isolated, and durable)
database transactions within your application.

Refer to the [Transaction Concepts](https://docs.couchbase.com/nodejs-sdk/current/concept-docs/transactions.html) concept page for a high-level overview.

:::info Info
Ottoman's `transactions` implementation is intuitive and simple, if you already know how to use `Ottoman` you can start working with transactions in no time.

If not, please check the basics:
- [Ottoman](/docs/basic/ottoman) object
- [Schema](/docs/basic/schema)
- [Model](/docs/basic/model)
- [Document](/docs/basic/document)
:::

## Creating a Transaction

To create a transaction, an application must supply its logic inside an arrow function,
including any conditional logic required. Once the arrow function has successfully run to conclusion,
the transaction will be automatically committed.
If at any point an error occurs, the transaction will rollback and the arrow function may run again.

```typescript
  const schema = new Schema({ name: String, age: Number });
  const Swam = model('Swam', schema);
  await start();
  try {
    await otttoman.$transactions(async (ctx: TransactionAttemptContext) => {
      const odette = new Swam({ name: 'Odette', age: 30 });
      await odette.save(false, { transactionContext: ctx });
      // check the document was created in the transaction context
      const doc = await Swam.findById(odette.id, { transactionContext: ctx });
      console.log(doc);
    });
  } catch (error) {
    if (error instanceof TransactionFailedError) {
      console.error('Transaction did not reach commit point', error)
    }

    if (error instanceof TransactionCommitAmbiguousError) {
      console.error('Transaction possibly committed', error)
    }
  }
  // check the document was successfully committed
  const doc = await Swam.findById(odette.id);
  console.log(doc)
```

The $transaction arrow function gets passed a `TransactionAttemptContext` object--generally referred to as `ctx` in these examples.
Since the arrow function could be rerun multiple times, it is important that it does not contain any side effects.
In particular, you should never perform regular operations on a Collection, such as `create()` without using the `ctx`, inside the arrow function.
Such operations may be performed multiple times, and will not be performed transactionally.
Instead, you should perform these operations through the using the `{ transactionContext: ctx }` to pass the Transaction Context.

In the event that a transaction fails, your application could run into the following errors:
- `TransactionCommitAmbiguousError`
- `TransactionFailedError`

Refer to [Error Handling](https://docs.couchbase.com/nodejs-sdk/current/concept-docs/transactions-error-handling.html#transaction_errors) for more details on these.

Method that currently support transaction context:

Ottoman:
- `query`

Model:
- `count` 
- `find` 
- `findById`  
- `findOne`  
- `create`  
- `createMany`  
- `updateById`  
- `replaceById`  
- `updateMany`  
- `removeById`  
- `removeMany`  
- `findOneAndUpdate`

Document:
- `save`
- `remove`
- `populate`


### Transaction Syntax

The syntax is pretty simple, just need to define the function to be run by `$transaction`,
then you only need to use the `ctx` parameter as option for the operations inside the `$transaction` function.

```typescript
await otttoman.$transactions(async (ctx: TransactionAttemptContext) => {
  const odette = Swam.create({ name: 'Odette', age: 30 }, { transactionContext: ctx });
})
```

:::tip Tips
The only change you need to add is always to pass the `ctx` in the option `transactionContext` inside `$transaction` function,
this way the operation will know you intend to use it as a transaction, use it as a rule of thumbs up and you will be fine.
:::

:::warning Pitfall
Not using the `{ transactionContext: ctx }` option inside the `$transaction` function will conduce to unexpected results.
Keep a sharp eye on it.
:::

### Rollback

To trigger a `rollback` manually you should execute `ctx._rollback` function.

```typescript
await otttoman.$transactions(async (ctx: TransactionAttemptContext) => {
  const odette = Swam.create({ name: 'Odette', age: 30 }, { transactionContext: ctx });
  ctx._rollback();
})
```

This way you are cancelling the transaction, so no changes inside the `$transaction` function will be committed.

### Handle Error

While creating a transaction you always should wrap it inside a `try catch` block and handle the exceptions.

```typescript
try {
  await otttoman.$transactions(async (ctx: TransactionAttemptContext) => {
    const odette = Swam.create({ name: 'Odette', age: 30 }, { transactionContext: ctx });
  });
} catch (error) {
  if (error instanceof TransactionFailedError) {
    console.error('Transaction did not reach commit point', error)
  }

  if (error instanceof TransactionCommitAmbiguousError) {
    console.error('Transaction possibly committed', error)
  }
}
```

### Concurrent Operations

The API allows operations to be performed concurrently inside a transaction, which can assist performance. 
There are two rules the application needs to follow:
- The first mutation must be performed alone, in serial. This is because the first mutation also triggers the creation of metadata for the transaction.
- All concurrent operations must be allowed to complete fully, so the transaction can track which operations need to be rolled back in the event of failure. This means the application must 'swallow' the error, but record that an error occurred, and then at the end of the concurrent operations, if an error occurred, throw an error to cause the transaction to retry.

:::tip Note: Query Concurrency
Only one query statement will be performed by the Query service at a time. Non-blocking mechanisms can be used to perform multiple concurrent query statements, but this may result internally in some added network traffic due to retries, and is unlikely to provide any increased performance.
:::

### Non-Transactional Writes

To ensure key-value performance is not compromised, and to avoid conflicting writes, applications should never perform non-transactional writes concurrently with transactional ones, on the same document.

See [Concurrency with Non-Transactional Writes](https://docs.couchbase.com/nodejs-sdk/current/concept-docs/transactions.html#concurrency-with-non-transactional-writes) to learn more.

### Configuration

The default configuration should be appropriate for most use-cases.
Transactions can optionally be globally configured when configuring the Cluster.
For example, if you want to change the level of durability which must be attained, 
this can be configured as part of the connect options:

```typescript
import { Ottoman } from 'ottoman';

const ottoman = new Ottoman();

const main = async () => {
  await ottoman.connect({
    connectionString: 'couchbase://localhost',
    bucketName: 'travel-sample',
    username: 'admin',
    password: 'password',
    transactions: {
      durabilityLevel: DurabilityLevel.PersistToMajority,
    },
  });
}

main();
```

The default configuration will perform all writes with the durability setting `Majority`,
ensuring that each write is available in-memory on the majority of replicas before the transaction continues. 
There are two higher durability settings available that will additionally wait for all mutations
to be written to physical storage on either the active or the majority of replicas, 
before continuing. This further increases safety, at a cost of additional latency.

:::warning Caution
A level of `None` is present but its use is discouraged and unsupported.
If durability is set to `None`, then ACID semantics are not guaranteed.
:::

### Ways of usage

Inside the `$transaction` function you can do almost everything you can do with Ottoman, for instance:
- `K/V` Operations
- `N1QL` queries
- Combinations between `K/V` and `N1QL`


### Examples

#### Save and retrieve a document inside a transaction, then check it was committed.

```typescript
const schema = new Schema({ name: String, age: Number });
const Swam = model('Swam', schema);
await start();
try {
  await otttoman.$transactions(async (ctx: TransactionAttemptContext) => {
    const name = `Odette`;
    const odette = new Swam({ name, age: 30 });
    await odette.save(false, { transactionContext: ctx });
    // check the document was created in the transaction context
    const list = await Swam.find({ name: 'Odette' }, { transactionContext: ctx });
  });
} catch (e) {
  // Error handling logic goes here.
}
// check the document was successfully committed
const list = await Swam.find({ name: 'Odette' }, { consistency: SearchConsistency.LOCAL });
```

#### Bulk operations 

```typescript
const schema = new Schema({ name: String, age: Number });
const Duck = model('Duck', schema);
await start();
try {
  await otttoman.$transactions(async (ctx: TransactionAttemptContext) => {
    const daisy = `Daisy`;
    const donald = `Donald`;
    const daffy = `Daffy`;
    // create 3 documents in the current context
    await Duck.createMany(
      [
        { name: daffy, age: 84 },
        { name: donald, age: 84 },
        { name: daisy, age: 84 },
      ],
      { transactionContext: ctx },
    );
    
    // execute a count query to check the 3 documents were created in the context
    const duckCount = await Duck.count({}, { transactionContext: ctx });
    console.log(duckCount)
    
    // rename the documents with age = 84 to Daisy
    await Duck.updateMany({ age: 84 }, { name: daisy }, { transactionContext: ctx });
    
    // query the list of documents to check they were updated as expected
    const list = await Duck.find({ age: 84 }, { transactionContext: ctx });
    console.log(list.rows)
  });
} catch (e) {
  // Error handling logic goes here.
}

// query the list of documents to check they were updated and committed
const list = await Duck.find({ age: 84 }, { consistency: SearchConsistency.LOCAL });
console.log(list.rows)
```

#### Rolling back a transaction

```typescript
const schema = new Schema({ name: String, age: Number });
const Swam = model('Swam', schema);
await start();
try {
  await otttoman.$transactions(async (ctx: TransactionAttemptContext) => {
    const name = `Odette`;
    const odette = new Swam({ name, age: 30 });
    // save the document in the transaction context
    await odette.save(false, { transactionContext: ctx });
    
    // check the document was created in the transaction context
    const list = await Swam.find({}, { transactionContext: ctx });
    console.log(list)
    
    // trigger the rollback (abort)
    await ctx._rollback();
  });
} catch (e) {
  // Error handling logic goes here.
}
// check the document wasn't committed
const list = await Swam.find({}, { consistency: SearchConsistency.LOCAL });
console.log(list);
// the document shouldn't be created.
```

### Additional Resources

- Check the Couchbase Node.JS SDK [transaction documentation](https://docs.couchbase.com/nodejs-sdk/current/howtos/distributed-acid-transactions-from-the-sdk.html).
- Learn more about [Distributed ACID Transactions](https://docs.couchbase.com/nodejs-sdk/current/concept-docs/transactions.html).
- Check out the SDK [API Reference](https://docs.couchbase.com/sdk-api/couchbase-node-client/index.html).