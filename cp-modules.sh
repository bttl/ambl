#! /bin/sh -e

eslint ./src/*.js

npm run build

PKG=ambl

MBLD=../mbl/node_modules/$PKG/

mkdir -p $MBLD

# -a archive mode; equals -rlptgoD (no -H,-A,-X)
# --delete - may delete system files if MBLD is undefined
# all extra files - remove manually

rsync \
	-av \
	--exclude=node_modules/ \
	./ ${MBLD}/
