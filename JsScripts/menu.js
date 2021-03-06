const menuData=[
{title: 'Home', link: '/index.html'},
{title: 'Blogposts', link: 'https://kushkushstudent.github.io/HtmlScripts/blogposts.html'},
{title: 'Petes Picks', link: 'https://kushkushstudent.github.io/HtmlScripts/petespicks.html'},
{title: 'Style Guide', link: 'https://kushkushstudent.github.io/HtmlScripts/styleGuide.html'},
{title: 'WireFrames', link: 'https://kushkushstudent.github.io/HtmlScripts/wireframe.html'},
{title: 'About', link: 'https://kushkushstudent.github.io/HtmlScripts/about.html'},
{title: 'Contacts', link: 'https://kushkushstudent.github.io/HtmlScripts/contacts.html'}




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
