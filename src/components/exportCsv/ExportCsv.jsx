import React from 'react';
import { CSVLink } from 'react-csv';
import DownloadIcon from '@mui/icons-material/Download';

export const ExportCsv = ({ csvData }) => {
  if (csvData.length > 0) {
    // Deleted id column
    const formattedCsv = csvData.map((employee) => {
      delete employee.id;
      return employee;
    });
    return (
      <CSVLink data={formattedCsv}>
        <DownloadIcon fontSize='large' />
      </CSVLink>
    );
  }
};
