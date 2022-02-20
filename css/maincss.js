function css(){
    return`/* #imgdiv{
        border: 2px solid teal;
      } */
      #container{
        display: flex;
        height: 100%;
        width: 100%;
        /* border: 2px solid red; */
        flex-flow: row wrap;
      }
      #sidebar{
        flex: 1.5;
        /* border: 2px solid black; */
        background-color:rgb(189, 194, 194)
      }
      #main{
        flex: 8.5;
        /* border: 3px solid teal; */
        background-color: rgb(189, 194, 194)
      }
      #picid{
        width: 250px;
      
      }
      
      #main{
        display:grid;
        grid-template-columns: repeat(3, 35%);
        grid-gap: 1%;
      }
      
      #sidebar *{
        margin: 15px;
        padding: 3px;
      }
      
      #searchenter{
        padding:10px;
        border: 10px solid black;
      }`
}

export default css;