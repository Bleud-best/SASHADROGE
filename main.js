"use strict";

const rndAnamal = () => {
  const count = 3;
  const rndNum = Math.floor(Math.random() * count);
  switch (rndNum){
    case  0:{
      return"dog";
    }
    case 1: {
      return "mouse";
    }
    case 2: {
      return "cat";
      }
  }
}