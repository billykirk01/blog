---
title: using tar and gzip
publish_date: 2022-06-18 20:00:00
snippet: my archive/compression cheat sheet
---
## tar
`tar -cvf /path/to/foo.tar /path/to/foo/` **c**reate **v**erbosely an uncompressed archive **f**ile

`tar -xvf /path/to/foo.tar` e**x**tract an uncompressed archive file

`tar -xvf /path/to/foo.tar -C /path/to/destination/` extract to a specific Directory

`tar -xf source.tar --wildcards "*.html"` extract only files matching a specific pattern

`tar -xzvf /path/to/foo.tgz` extract a compressed (**z**ipped) archive (can use .tgz or tar.gz)
 
`tar -czvf /path/to/foo.tgz /path/to/foo/` create a compressed archive

`tar -tzvf /path/to/foo.tgz` list the content of a .tgz archive:

`tar -czvf /path/to/foo.tgz --exclude=\*.{jpg,gif} /path/to/foo/` exclude all jpg and gif files from the archive

## gzip

`gzip /path/to/foo.ext` compress a file, replacing it with a compressed version

`gzip -d /path/to/foo.ext.gz` **d**ecompress a file, replacing it with the origional uncompressed version

`gzip -k /path/to/foo.ext` Compress a file, **k**eeping the original file

`gzip -c /path/to/foo.ext > /path/to/compressed_foo.ext.gz` compress a file specifying the output filename

`gzip -c -d /path/to/foo.ext.gz > /path/to/decompressed_foo.ext` decompress a gzipped file specifying the output filename

`gzip -9 -c {{file.ext}} > {{compressed_file.ext.gz}}` Specify the compression level. 1=Fastest (Worst), 9=Slowest (Best), Default 6