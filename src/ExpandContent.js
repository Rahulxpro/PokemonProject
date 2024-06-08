import "./App.css"
export default function ExpandContent({
    name,image,type,
    visible,setVisible,obj
}){
    const {height,weight,stat1,stat2,stat3,stat4,stat5,stat6,bs1,bs2,bs3,bs4,bs5,bs6}=obj;
    return (
        <>
         <div className="opaquescreen">
         </div>
         <div className={`expanded-overlay ${type}`}>
          <button className={`close-button ${type}`} 
          onClick={()=>setVisible(false)}>x</button>
          <div className="expanded-left">
            <img className="expanded-image" src={image} alt={name}/>
            <h3 className="expanded-name">{name}</h3>
          </div>
        <div className={`expanded-right ${type}`}>
           <table className={`expanded-table ${type}`}>
             <tbody>
               <tr>
                 <td>
                    <table>
                      <tr> 
                         <td>Weight:</td>
                         <td>{weight}</td>
                      </tr>
                      <tr> 
                         <td>Height:</td>
                         <td>{height}</td>
                      </tr>
                    </table>
                 </td>
                 <td>
                    <table>
                      <tr> 
                         <td>Stat1:</td>
                         <td>{stat1}</td>
                      </tr>
                      <tr> 
                         <td>stat2:</td>
                         <td>{stat2}</td>
                      </tr>
                      <tr> 
                         <td>Stat3:</td>
                         <td>{stat3}</td>
                      </tr>
                      <tr> 
                         <td>stat4:</td>
                         <td>{stat4}</td>
                      </tr>
                      <tr> 
                         <td>Stat5:</td>
                         <td>{stat5}</td>
                      </tr>
                      <tr> 
                         <td>stat6:</td>
                         <td>{stat6}</td>
                      </tr>
                    </table>
                 </td>
                 <td>
                    <table>
                      <tr> 
                         <td>Bs1:</td>
                         <td>{bs1}</td>
                      </tr>
                      <tr> 
                         <td>Bs2:</td>
                         <td>{bs2}</td>
                      </tr>
                      <tr> 
                         <td>Bs3:</td>
                         <td>{bs3}</td>
                      </tr>
                      <tr> 
                         <td>Bs4:</td>
                         <td>{bs4}</td>
                      </tr>
                      <tr> 
                         <td>Bs5:</td>
                         <td>{bs5}</td>
                      </tr>
                      <tr> 
                         <td>Bs6:</td>
                         <td>{bs6}</td>
                      </tr>
                    </table>
                 </td>
               </tr>
             </tbody>
           </table>
        </div>
         </div>
        </>
    )
}