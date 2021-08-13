**create env**
```
python3.8 -m venv venv   
```

**run env**
```
source venv/bin/activate
```

**install libraries**
```
pip install -r requirements.txt
```

**start project**
`python startup.py`

**install npm dependencies**
***required node v12.X***

**install node module**
```
npm i
```

**generate app.css and app.js**
```
./client-bundle.sh [params]
```

`
Param can be:
`

`''  = dev`

`t = dev + build tailwindcss`

`p = pro + build tailwindcss`

!!! Before git commit, you need to run "./client-bundle.sh p" 
