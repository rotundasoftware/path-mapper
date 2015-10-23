var path = require( 'path' );

module.exports = function( srcFile, directoryMap ) {
	var dstFile;

	var curDir = srcFile;

	// srcFile path must be an absolute path that begins with path.sep,
	// so the final state of curDur will always === path.sep if srcFile is
	// not affected by the mapping.
	while( curDir !== path.sep ) {
		curDir = path.dirname( curDir );
		var dstDir = typeof directoryMap === 'function' ? directoryMap( curDir ) : directoryMap[ curDir ];

		if( dstDir ) {
			dstFile = path.resolve( dstDir, path.relative( curDir, srcFile ) );
			break;
		}
	}

	return dstFile ? dstFile : srcFile;
};
