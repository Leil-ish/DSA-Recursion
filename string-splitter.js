function stringSplitter(string, separator){
    if(string.length===0){
      return[];
    }
    if(string.indexOf(separator)=== -1){
      return[string];
    }
    if(separator===''){
      return [string[0], ...stringSplitter(string.slice(1), separator)];
    }
    return [string.slice(0, string.indexOf(separator)), ...stringSplitter(string.slice(string.indexOf(separator)+1), separator)];
  }
  console.log(stringSplitter('Leila Anderson', ''));