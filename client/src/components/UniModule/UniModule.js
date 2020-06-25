import React from "react";

// styled components
import ModuleContainer from "./styledComponents/ModuleContainer";
import Table from "./styledComponents/Table";

function UniModule({ module }) {
  return (
    <ModuleContainer>
      <Table>
        <thead>
          <tr>
            <th>Module Name</th>
            <th>Level</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{module.moduleTitle}</td>
            <td>{module.moduleLevel}</td>
            <td>
              <i>{module.result}</i>
            </td>
          </tr>
        </tbody>
      </Table>
    </ModuleContainer>
  );
}

export default UniModule;
