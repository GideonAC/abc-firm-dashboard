import React from "react";

const Table = () => {
  return (
    <div className="table">
      <div className="recent">
        <p className="recent-files">Recent Files</p>
      </div>

      <div className="list">
        <table>
          <tr className="bottom-line">
            <td>
              <input type="checkbox" id="" />
            </td>
            <th>Name</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Date Created</th>
            <th>Last Updated</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>
              <input type="checkbox" id="" />
            </td>
            <td>Peng Meeting</td>
            <td>Audio</td>
            <td>20:</td>
            <td>Tofunmi</td>
            <td>Table cell</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" id="" />
            </td>
            <td>Tofunmi Idowu</td>
            <td>SML10025</td>
            <td>1/5/2023</td>
            <td>Constance</td>
            <td>Table cell</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" id="" />
            </td>
            <td>Naomi Igimoh</td>
            <td>SML10025</td>
            <td>25/4/2023</td>
            <td>Shakirat</td>
            <td>Table cell</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" className="" />
            </td>
            <td>Edu Hermanns</td>
            <td>SML10025</td>
            <td>20/4/2023</td>
            <td>Tofunmi</td>
            <td>Table cell</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" id="" />
            </td>
            <td>Timmy Adubi</td>
            <td>SML10025</td>
            <td>20/4/2023</td>
            <td>Tofunmi</td>
            <td>Table cell</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" id="" />
            </td>
            <td>Alex Oyebade</td>
            <td>SML10025</td>
            <td>20/4/2023</td>
            <td>Shakirat</td>
            <td>Table cell</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" id="" />
            </td>
            <td>Ekene Smart</td>
            <td>SML10025</td>
            <td>20/4/2023</td>
            <td>Shakirat</td>
            <td>Table cell</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table;
