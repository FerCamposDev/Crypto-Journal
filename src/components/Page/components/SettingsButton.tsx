import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, ListItemIcon, ListItemText, MenuList } from '@mui/material';
import { Download, Settings, Upload } from '@mui/icons-material';
import { exportCryptos, importCryptos } from '../../../utils/blobStorage';
import useMyCryptos from '../../../hooks/useMyCryptos';

import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

export default function SettingsButton() {
  const { myCryptos, getMyCryptos } = useMyCryptos();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if(fileList?.length){
      const file = fileList[0];
      await importCryptos(file);
      getMyCryptos();
    }
  }

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Settings />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList>
          <label htmlFor="icon-button-file">
            <MenuItem >
              <Input accept="application/json" id="icon-button-file" type="file" onChange={handleFile}/>
              <ListItemIcon>
                <Upload fontSize="small" />
              </ListItemIcon>
              <ListItemText>Import Cryptos</ListItemText>
            </MenuItem>
          </label>
          <MenuItem onClick={() => exportCryptos(myCryptos)}>
            <ListItemIcon>
              <Download fontSize="small" />
            </ListItemIcon>
            <ListItemText>Export Cryptos</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}