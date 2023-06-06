# file-data

A local file storage service running [minio](https://min.io/docs/minio/linux/reference/minio-mc.html).

Production values
```
user: leloadmin
pass: leloisthebestjewelryintheworld
minio access key: aBAWvozO9xxJ9XMTd9gc
minio secret: Hv44WB4Qu3LmuXF98zI6RUV70Vza1iozZEunJhPP
```

## minio cli client commands

```bash
# connect to remote
mc alias set lelo https://lelo-file-data-production.up.railway.app leloadmin leloisthebestjewelryintheworld

# create a bucket named `lelo-image-data`
mc mb lelo/lelo-image-data

# set access policy to public
mc anonymous set public lelo/lelo-image-data

# copy a file
mc cp lelo/lelo-image-data/exports/products/product-export-1684890273562.csv .
```
