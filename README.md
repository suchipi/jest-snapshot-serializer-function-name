# jest-snapshot-serializer-function-name
Jest snapshot serializer that adds function names to snapshots


## Background
Jest used to include function names in its snapshots, but doesn't anymore because of inconsistencies across node versions and problems with identifiers being rewritten when running code coverage.

If you only target one node version and don't use code coverage, then these issues don't apply to you, so function names in snapshots are likely desirable.

You can use this package to restore that functionality to jest.

## Installation

* Add the package to your project using npm or yarn
```sh
$ npm install --save-dev jest-snapshot-serializer-function-name
# OR
$ yarn add --dev jest-snapshot-serializer-function-name
```

* Edit the `snapshotSerializers` section of your jest configuration:
```json
// package.json
{
  ...
  "jest": {
    "snapshotSerializers": ["jest-snapshot-serializer-function-name"]
  }
}
```

* Run `jest -u` to update your snapshots

## Contributing

Pull requests and issues welcome.
