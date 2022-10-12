import React from 'react';
import { CSVLink } from 'react-csv';
import DownloadIcon from '@mui/icons-material/Download';

export const ExportCsv = ({ csvData }) => {
  if (csvData.length > 0) {
    return (
      <CSVLink data={csvData}>
        <DownloadIcon fontSize='large' />
      </CSVLink>
    );
  }
};
