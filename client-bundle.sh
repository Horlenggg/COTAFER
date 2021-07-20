#!/bin/bash
# run me like below
# ./client-bundle-dev.sh

buildTailwind() {
  # Build new tailwindcss for Production
  npm run build-tailwindcss
}

echo -e "\e[92mStarting >>>>>>>>>>>>>>>>>>>>>>>>>"
### Create variables ###
RootPath=./page/assets/
PagePath="$RootPath"module
VendorPath="$RootPath"vendor
Tailwindcss="$VendorPath"/tailwindcss/tailwindcss.css
BaseJavascript="$PagePath"/base.js
ModulePathList=("$PagePath"/*/)

# import libraries.sh
BaseLibraries=./page/assets/vendor/libraries.sh
source $BaseLibraries

: '
###############################
      Staging + Production
###############################
'
if [ "$1" = "p" ]; then
  echo '
  ###############################
        Staging + Production
  ###############################
  '
  # Build new tailwindcss for Production
  npm run build-pro

  # loop through ModulePathList
  for module in "${ModulePathList[@]}"
  do
    # import libs.sh
    ModuleLibraries="$module"libs.sh
    source $ModuleLibraries

    ### Start create variables ###
    # css
    AppCss="$module"app.css
    AppCssBase="$module"app.base.css
    AppCssCustom=("$module"css/*.css)
    # js
    AppJs="$module"app.js
    AppJsBase="$module"app.base.js
    AppJsCustom=("$module"js/*.js)

    # remove old data
    rm $AppJs $AppJsBase $AppCss $AppCssBase
    ### End create variables ###

    ### Start prepare to write file ###
    # css
    if [ ! -e $AppCss ]; then
      touch $AppCss
    fi
    if [ ! -e $AppCssBase ]; then
      touch $AppCssBase
    fi

    # js
    if [ ! -e $AppJs ]; then
      touch $AppJs
    fi
    if [ ! -e $AppJsBase ]; then
      touch $AppJsBase
    fi
    ### End prepare to write file ###

    ### Start merge files ###
    # css (libraries and tailwindcss)
    # loop through list of css libraries from (lib.sh)
    echo -e "\e[93m>> Merging Css ....";
    for CssFile in "${css[@]}"
    do
      # lib
      echo ">> Append: $CssFile into $AppCssBase";

      # merge lib into css
      cat $CssFile >> $AppCssBase
    done

    # loop through list of custom css
    for CssFile in "${AppCssCustom[@]}"
    do
      # lib
      echo ">> Append: $CssFile into $AppCssBase";

      # merge custom css into css
      cat $CssFile >> $AppCssBase
    done

    # merge tailwindcss into css
    cat $Tailwindcss >> $AppCssBase

    # js (libraries)
    # loop through list of javascript libraries from (lib.sh)
    echo ">> Merging JavaScript ....";
    for JsFile in "${js[@]}"
    do
      # lib
      echo ">> Append: $JsFile into $AppJsBase";

      # merge lib into javascript
      cat $JsFile >> $AppJsBase
    done

    # merge BaseJavascript into Javascript
    cat $BaseJavascript >> $AppJsBase

    # loop through list of custom javascript
    for JsFile in "${AppJsCustom[@]}"
    do
      # lib
      echo ">> Append: $JsFile into $AppJsBase";

      # merge custom javascript into javascript
      cat $JsFile >> $AppJsBase
    done

    ### End merge files ###

    ### unset variable (css & js) from libs.sh ###
    unset css
    unset js

    ### compress ##
    # css
    echo ">> Compressing Css ...";
    uglifycss $AppCssBase > $AppCss
    rm $AppCssBase

    # js
    echo ">> Compressing Javascript ...";
    terser $AppJsBase > $AppJs
    rm $AppJsBase
  done

: '
###############################
      Local + Development
###############################
'
else
  echo '
  ###############################
        Local + Development
  ###############################
  '
  if [ "$1" = "t" ]; then
    buildTailwind
  fi

  # loop through ModulePathList
  for module in "${ModulePathList[@]}"
  do
    # import libs.sh
    ModuleLibraries="$module"libs.sh
    source $ModuleLibraries

    ### Start create variables ###
    # css
    AppCss="$module"app.css
    AppCssCustom=("$module"css/*.css)
    # js
    AppJs="$module"app.js
    AppJsCustom=("$module"js/*.js)

    # remove old data
    rm $AppJs $AppCss
    ### End create variables ###

    ### Start prepare to write file ###
    # css
    if [ ! -e $AppCss ]; then
      touch $AppCss
    fi
    # js
    if [ ! -e $AppJs ]; then
      touch $AppJs
    fi
    ### End prepare to write file ###

    ### Start merge files ###
    # css (libraries and tailwindcss)
    # loop through list of css libraries from (lib.sh)
    echo -e "\e[93m>> Merging Css ...";
    for CssFile in "${css[@]}"
    do
      # lib
      echo ">> Append: $CssFile into $AppCss";

      # merge lib into css
      cat $CssFile >> $AppCss
    done

    # loop through list of custom css
    for CssFile in "${AppCssCustom[@]}"
    do
      # lib
      echo ">> Append: $CssFile into $AppCssBase";

      # merge custom css into css
      cat $CssFile >> $AppCss
    done

    # merge tailwindcss into css
    cat $Tailwindcss >> $AppCss

    # js (libraries)
    # loop through list of javascript libraries from (lib.sh)
    echo ">> Merging JavaScript ...";
    for JsFile in "${js[@]}"
    do
      # lib
      echo ">> Append: $JsFile into $AppJs";

      # merge libraries into javascript
      cat $JsFile >> $AppJs
    done

    # merge BaseJavascript into Javascript
    cat $BaseJavascript >> $AppJs

    # loop through list of custom javascript
    for JsFile in "${AppJsCustom[@]}"
    do
      # lib
      echo ">> Append: $JsFile into $AppJsBase";

      # merge custom javascript into javascript
      cat $JsFile >> $AppJs
    done
    ### End merge files ###

    ### unset variable (css & js) from libs.sh ###
    unset css
    unset js
  done
fi
echo -e "\e[92mDone <<<<<<<<<<<<<<<<<<<<<<<<<<<<< \e[0m"
