import React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button } from '@mui/material';

const InstructionsModal = ({ open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box 
                sx={{
                    position: 'absolute',
                    top: '40%', // Start higher than center
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'white',
                    borderRadius: '10px',
                    boxShadow: 24,
                    p: 4,
                    textAlign: 'center',
                    opacity: 0,
                    animation: 'slideDown 0.5s forwards, fadeIn 0.5s forwards',
                    color: '#191919'
                }}
            >
                <h2 style={{ marginBottom: '16px' }}>Movement Instructions</h2>
                <p>Use the following controls to navigate:</p>
                <ul style={{ textAlign: 'left', marginBottom: '16px' }}>
                    <li><strong>W:</strong> Move Forward</li>
                    <li><strong>S:</strong> Move Backward</li>
                    <li><strong>A:</strong> Move Left</li>
                    <li><strong>D:</strong> Move Right</li>
                    <li><strong>Mouse Drag:</strong> Rotate View</li>
                    <li><strong>▲:</strong> Move Forward (Mouse Drag Up)</li>
                    <li><strong>▼:</strong> Move Backward (Mouse Drag Down)</li>
                    <li><strong>◄:</strong> Rotate Left</li>
                    <li><strong>►:</strong> Rotate Right</li>
                </ul>
                <Button 
                    variant="contained" 
                    onClick={handleClose} 
                    sx={{ 
                        mt: 2, 
                        bgcolor: '#1976d2', 
                        '&:hover': { 
                            bgcolor: '#115293' 
                        } ,
                        fontSize: "14px"
                    }}
                >
                    Got it!
                </Button>
            </Box>
        </Modal>
    );
};

export default InstructionsModal;
