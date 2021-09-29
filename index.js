function reversestring(str){
    var reversed=str.split("").reverse().join("");
  
    return reversed;
    
}

function isitpalindrome(str){
    var reverse=reversestring(str);

    if(str===reverse){
        return true;
    }
    else{
        return false;
        
    }
}
function numbertostring(date){
    var datestring={day:'',month:'',year:''};
    if(date.day<10)
{
    datestring.day='0'+date.day;
}
else{
datestring.day=date.day.toString();
}

if(date.month<10)
{
    datestring.month='0'+date.month;
}
else{
datestring.month=date.month.toString();
}
datestring.year=date.year.toString();
return datestring;
}

function returnallvariations(date){
    var date2=numbertostring(date);
    var ddmmyyyy=date2.day+date2.month+date2.year;
    var mmddyyyy=date2.month+date2.day+date2.year;
    var yyyymmdd=date2.year+date2.month+date2.day;
    var mmddyy=date2.month+date2.day+date2.year.slice(-2);
    var yymmdd=date2.year.slice(-2)+date2.month+date2.day;
    var ddmmyy=date2.day+date2.month+date2.year.slice(-2);

    return [ddmmyyyy,mmddyyyy,yyyymmdd,mmddyy,yymmdd,ddmmyy];
}


function checkpalindrome(date){
    var list=returnallvariations(date);
    var ispalindrome=false;
    for(let i=0;i<list.length;i++){
        if(isitpalindrome(list[i])){
            ispalindrome=true;
            break;

        }
    }
    return ispalindrome;
}

function checkleapyear(year){

    if(year%400==0){
        return true;
    }
    if(year%100===0){
        return false;
    }
    if(year%4==0){
        return true;
    }
    return false;
}

function nextdate(date){
    var day=date.day+1;
    var month=date.month;
    var year=date.year;

    var maxdays=[31,28,31,30,31,30,31,31,30,31,30,31];

    if(month===2){
        if(checkleapyear(year)){
            if(day>29){
                day=1;
                month++;
            }
        }
        else{
            if(day>28){
                day=1;
                month++;
            }

        }

    }
    else{
        if(day>maxdays[month-1]){
            day=1;
            month=month++;
        }
    }
    if(month>12){
        month=1;
        year++;
    }

    return {
        day:day,
        month:month,
        year:year
    };
}
function nextpalindrome(date){
    var count=0;
    var nextnewdate=nextdate(date);
    var flag=false;
    while(flag===false){
        console.log(flag)
        count++;
        var palindrome=checkpalindrome(nextnewdate);
        if(palindrome===true){
        
            flag=true;
            break;
        }
     nextnewdate=nextdate(nextnewdate);
    }
    return [count,nextnewdate];
}


date1={
    day:31,
    month:12,
    year:2020
}
console.log(nextpalindrome(date1));









