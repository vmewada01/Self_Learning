
let navbar =() =>{
    return `
    <div id="search_bar">
    <input type="text" id="query">
    
    </div>
    <div id="categories">
    <h3 id="nature">Nature</h3>
    <h3 id="car">Cars</h3>
    <h3 id="cartoon">Cartoons</h3>
    <h3 id="music">Music</h3>
    <h3 id="technology">Technology</h3>
    <h3 id="marvel">Marvel</h3>
    
    <h3>
    <select name="sorting" id="sorting">
 <option value="latest">latest</option>
 <option value="oldest">oldest</option>
 <option value="popular">popular</option>
 <option value="views">views</option>
 <option value="downloads">downloads</option>
 </select>
</h3>

<h3> <select name="filtering" id="filtering">
<option value="landscape">landscape</option>
<option value="portrait">portrait</option>
<option value="squarish">squarish</option>
</select>
</h3>


    
    </div>
    
    `;
};




export {navbar};