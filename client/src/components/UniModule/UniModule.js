import React from "react";

// styled components
import Table from "./styledComponents/Table";

function UniModule({ modules }) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Module Name</th>
            <th>Level</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module, index) => {
            return (
              <tr key={index}>
                <td>{module.moduleTitle}</td>
                <td>{module.moduleLevel}</td>
                <td>
                  <i>{module.result}</i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default UniModule;
