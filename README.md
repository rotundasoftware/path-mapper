Solves for the new path of `srcFilePath` given the changes to the directory structure described by `directoryChanges`. `directoryChanges` is either a hash that maps the absolute paths of old directories to those of new directories or a function that does the same. `srcFilePath` is an absolute path.

If no changes are described in `directoryChanges` that affect the path of `srcFilePath`, then `srcFilePath` is returned. 

```javascript
pathMapper = require( 'path-mapper' );

dstFilePath = pathMapper( srcFilePath, directoryChanges );

// or

var url = pathMapper( srcFilePath, function( srcDir ) {
	return '/' + packagePathsToIds[ srcDir ];
} );
```

## License

MIT