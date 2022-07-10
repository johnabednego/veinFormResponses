import "./dbView.css";

const DBView = ({ columns, data }) => {
    let count =0;
    return ( 
        <div className="table__wrapper">
            <h1 className="main__title">VeinForm</h1>
            <h2 className="table__title">Survey Responses</h2>
            <hr />
            <div className="table__container">
                <table>
                    <thead>
                        <tr>
                            {columns.map((head) => (<th key={head.ID}>{head.question}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (

                            <tr key={row._id}>
                               <td>{data.length>0?count = count +1:''}</td>
                               <td>{row.createdAt}</td>
                               <td>{row.question_1}</td>
                               <td>{Object.keys(row.question_2[0]).map((key, index)=>{
                                return (
                                    <div key={index}>
                                      <p>
                                       {row.question_2[0][key]}
                                      </p>
                                    </div>
                                  );
                               })}</td>
                               <td>{row.question_3}</td>
                               <td>{row.question_4.map(d=><p>{d}</p>)}</td>
                               <td>{row.question_5}</td>
                               <td>{row.question_6.map(d=>(<p>{d}</p>))}</td>
                               <td>{row.question_7}</td>
                               <td>{row.question_8}</td>
                               <td>{row.question_9}</td>
                               <td>{row.question_10}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default DBView;