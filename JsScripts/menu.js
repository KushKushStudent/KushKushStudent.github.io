const menuData=[
{title: 'Home', link: 'index.html'},
{title: 'Blogposts', link: '/HtmlScripts/blogposts.html'},
{title: 'Petes Picks', link: '/kushkushstudent.github.io/HtmlScripts/petespicks.html'},
{title: 'Style Guide', link: '/kushkushstudent.github.io/HtmlScripts/styleGuide.html'},
{title: 'WireFrames', link: '/kushkushstudent.github.io/HtmlScripts/wireframe.html'},
{title: 'About', link: '/kushkushstudent.github.io/HtmlScripts/about.html'},
{title: 'Contacts', link: '/kushkushstudent.github.io/HtmlScripts/contacts.html'}




];
const initialiseMenu=()=>{
const nav=document.querySelector('nav');
const ul=document.createElement('ul');
for (let item of menuData){

    const li=document.createElement('li');
    const a=document.createElement('a');
    a.innerText=item.title;
    a.href=item.link;
    li.appendChild(a);
    ul.appendChild(li);
    
    
}


nav.appendChild(ul);
};
document.addEventListener('DOMContentLoaded',()=>initialiseMenu());
