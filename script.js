var op="" ;
function zero(){
    a = document.getElementById("current") ; 
   a.innerHTML="0"; 
   b=document.getElementById("prev") ; 
   b.innerHTML="" ;
   op="" ; 
   
}
function num(x){
    a = document.getElementById("current") ; 
    st=a.innerHTML ;
    if(st!=="0"){
    st=st+x.toString() ; 
    a.innerHTML=st;
}

else{
    st="" ;
    st=st+x.toString() ; 
    a.innerHTML=st;
}
a = document.getElementById("current") ; 
    st=a.innerHTML ;
if(st.indexOf("..")!=-1){
    a.innerHTML="error" ; 
}
}
function del(){
    a = document.getElementById("current") ; 
    st=a.innerHTML ;
    st=st.slice(0,st.length-1) ; 
    a.innerHTML=st;
}
function sur(){
    if (op!=="")if (op==="/"){
        a = document.getElementById("current") ; 
        st1=a.innerHTML;
        b=document.getElementById("prev") ; 
        st2=b.innerHTML;
        b.innerHTML="" ;
        c=parseFloat(st2)/parseFloat(st1) ; 
    r=c;
    a.innerHTML=c.toString()

}
else if (op==="*"){
a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)*parseFloat(st1) ; 

a.innerHTML=c.toString()  
}
else if(op==="+"){
    a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)+parseFloat(st1) ; 

a.innerHTML=c.toString()  }
else if(op==="-"){
    a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)-parseFloat(st1) ; 

a.innerHTML=c.toString()  

}


     a = document.getElementById("current") ; 
    st1=a.innerHTML;
    op="/";
    a.innerHTML="" ;
    b=document.getElementById("prev") ; 
    st2=b.innerHTML;
    if ((st1=="")|| (st1=="0") || (st1.indexOf("error")!=-1)){
    b.innerHTML="error" ;}
    else{
        b.innerHTML=st1 ;  
    }
    if (st2!="")
    {   
        c=parseFloat(st2)/parseFloat(st1) ; 
        
        b.innerHTML=c.toString()
      
        
    }   }
 

function mult(){
    if (op!=="")if (op==="/"){
        a = document.getElementById("current") ; 
        st1=a.innerHTML;
        b=document.getElementById("prev") ; 
        st2=b.innerHTML;
        b.innerHTML="" ;
        c=parseFloat(st2)/parseFloat(st1) ; 
    r=c;
    a.innerHTML=c.toString()

}
else if (op==="*"){
a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)*parseFloat(st1) ; 

a.innerHTML=c.toString()  
}
else if(op==="+"){
    a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)+parseFloat(st1) ; 

a.innerHTML=c.toString()  }
else if(op==="-"){
    a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)-parseFloat(st1) ; 

a.innerHTML=c.toString()  

}
    a = document.getElementById("current") ; 
    st1=a.innerHTML;
    op="*";
    a.innerHTML="" ;
    b=document.getElementById("prev") ; 
    st2=b.innerHTML;
    if ((st1=="")|| (st1=="0") || (st1.indexOf("error")!=-1)){
    b.innerHTML="error" ;}
    else{
        b.innerHTML=st1 ;  
    }
    if (st2!="")
    {   
        c=parseFloat(st2)*parseFloat(st1) ; 
        
        b.innerHTML=c.toString()
      
        
    }
 
    
  
    }
 
function plus(){
    if (op!=="")if (op==="/"){
        a = document.getElementById("current") ; 
        st1=a.innerHTML;
        b=document.getElementById("prev") ; 
        st2=b.innerHTML;
        b.innerHTML="" ;
        c=parseFloat(st2)/parseFloat(st1) ; 
    r=c;
    a.innerHTML=c.toString()

}
else if (op==="*"){
a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)*parseFloat(st1) ; 

a.innerHTML=c.toString()  
}
else if(op==="+"){
    a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)+parseFloat(st1) ; 

a.innerHTML=c.toString()  }
else if(op==="-"){
    a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)-parseFloat(st1) ; 

a.innerHTML=c.toString()  

    
}a = document.getElementById("current") ; 
st1=a.innerHTML;
op="+";
a.innerHTML="" ;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
if ((st1=="")|| (st1=="0") || (st1.indexOf("error")!=-1)){
b.innerHTML="error" ;}
else{
    b.innerHTML=st1 ;  
}
if (st2!="")
{   
    c=parseFloat(st2)*parseFloat(st1) ; 
    
    b.innerHTML=c.toString()
  
    
}
}
function sub(){
    if (op!=="")if (op==="/"){
        a = document.getElementById("current") ; 
        st1=a.innerHTML;
        b=document.getElementById("prev") ; 
        st2=b.innerHTML;
        b.innerHTML="" ;
        c=parseFloat(st2)/parseFloat(st1) ; 
    r=c;
    a.innerHTML=c.toString()

}
else if (op==="*"){
a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)*parseFloat(st1) ; 

a.innerHTML=c.toString()  
}
else if(op==="+"){
    a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)+parseFloat(st1) ; 

a.innerHTML=c.toString()  }
else if(op==="-"){
    a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)-parseFloat(st1) ; 

a.innerHTML=c.toString()  

    
}a = document.getElementById("current") ; 
st1=a.innerHTML;
op="-";
a.innerHTML="" ;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
if ((st1=="")|| (st1=="0") || (st1.indexOf("error")!=-1)){
b.innerHTML="error" ;}
else{
    b.innerHTML=st1 ;  
}
if (st2!="")
{   
    c=parseFloat(st2)-parseFloat(st1) ; 
    
    b.innerHTML=c.toString()
  
    
}
}

function egale(){
    if (op!=="")if (op==="/"){
        a = document.getElementById("current") ; 
        st1=a.innerHTML;
        b=document.getElementById("prev") ; 
        st2=b.innerHTML;
        b.innerHTML="" ;
        c=parseFloat(st2)/parseFloat(st1) ; 
    r=c;
    a.innerHTML=c.toString()

}
else if (op==="*"){
a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)*parseFloat(st1) ; 

a.innerHTML=c.toString()  
}
else if(op==="+"){
    a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)+parseFloat(st1) ; 

a.innerHTML=c.toString()  }
else if(op==="-"){
    a = document.getElementById("current") ; 
st1=a.innerHTML;
b=document.getElementById("prev") ; 
st2=b.innerHTML;
b.innerHTML="" ;
c=parseFloat(st2)-parseFloat(st1) ; 

a.innerHTML=c.toString()  

   
}}

