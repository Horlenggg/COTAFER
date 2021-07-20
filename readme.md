**create env**
`python3.8 -m venv venv`

**run env**
`source venv/bin/activate`

**install libraries**
`pip install -r requirements.txt`

**start project**
`python startup.py`

**install npm dependencies**
***required node v12.X***

`
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest postcss-cli@latest
npm install -D @tailwindcss/forms
npm run build-tailwindcss
npm install -g terser
npm install -g uglifycss
`

**generate app.css and app.js**
`
./client-bundle.sh 'p' or 't' or ''
(
''  = dev
, t = dev + build tailwindcss
, p = pro + build tailwindcss
)
`

!!! Before git commit, you need to run "./client-bundle.sh p" 
