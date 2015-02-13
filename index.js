var path = require( 'path' );

module.exports = function( srcFile, directoryMap ) {
	var dstFile;

	var curDir = srcFile;

	while( curDir !== '' && curDir !== path.sep ) {
		curDir = path.dirname( curDir );
		var dstDir = typeof directoryMap === 'function' ? directoryMap( curDir ) : directoryMap[ curDir ];

		if( dstDir ) {
			dstFile = path.resolve( dstDir, path.relative( curDir, srcFile ) );
			break;
		}
	}

	return dstFile ? dstFile : srcFile;
};
