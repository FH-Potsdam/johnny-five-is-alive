for f in *; do
    if [[ -d $f ]]; then
        # $f is a directory
        echo $f
        npm install $f
    fi
done