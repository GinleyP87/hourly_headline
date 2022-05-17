import React from 'react';
import './style.css';

const Admin = () => {
    return (
        <div>
            <h1 className='adminTitle'>
                Admin Page
            </h1>
            <div className='formContainer'>
                <form>
                    <select className='hourDrop'>
                        <option value="Hour01">Hour 00</option>
                        <option value="Hour02">Hour 01</option>
                        <option value="Hour03">Hour 03</option>
                        <option value="Hour04">Hour 04</option>
                        <option value="Hour05">Hour 05</option>
                        <option value="Hour06">Hour 06</option>
                        <option value="Hour07">Hour 07</option>
                        <option value="Hour08">Hour 08</option>
                        <option value="Hour09">Hour 09</option>
                        <option value="Hour10">Hour 10</option>
                        <option value="Hour11">Hour 11</option>
                        <option value="Hour12">Hour 12</option>
                        <option value="Hour13">Hour 13</option>
                        <option value="Hour14">Hour 14</option>
                        <option value="Hour15">Hour 15</option>
                        <option value="Hour16">Hour 16</option>
                        <option value="Hour17">Hour 17</option>
                        <option value="Hour18">Hour 18</option>
                        <option value="Hour19">Hour 19</option>
                        <option value="Hour20">Hour 20</option>
                        <option value="Hour21">Hour 21</option>
                        <option value="Hour22">Hour 22</option>
                        <option value="Hour23">Hour 23</option>
                    </select>
                    <p>Paste Link to new article below.</p>
                    <input className='linkInput'>
                    </input>
                    <p>Add a title </p>
                    <input className='descriptionInput'></input>
                    <br/>
                    <br/>
                    <button className='submitArticle'>Submit News Article</button>
                </form>
            </div>
        </div>
    )
}

export default Admin