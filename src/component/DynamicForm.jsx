import React, { useState } from 'react';
import FormElement from './FormElement';
import { Button, MenuItem, TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';

const DynamicForm = () => {
    const [formElements, setFormElements] = useState([]);
    const [previewElement, setPreviewElement] = useState(null);
    const [newElement, setNewElement] = useState({
        type: 'text',
        placeholder: '',
        buttonText: '',
        backgroundColor: '', 
        textColor: '', 
        margin: '0px',
        padding: '0px',
        xAxis: '0px',
        yAxis: '0px',
    });

    const handleAddElement = () => {
        if (previewElement) {
            setFormElements([...formElements, previewElement]);
            setPreviewElement(null);
            setNewElement({
                type: 'text',
                placeholder: '',
                buttonText: '',
                backgroundColor: '',
                textColor: '',
                margin: '0px',
                padding: '0px',
                xAxis: '0px',
                yAxis: '0px',
            });
        }
    };

    const handlePreviewElement = () => {
        setPreviewElement({ ...newElement });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedElement = { ...newElement, [name]: value };
        setNewElement(updatedElement);
        setPreviewElement(updatedElement);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center my-4">Dynamic Form Builder</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Field Type Selection */}
                <TextField
                    select
                    label="Element Type"
                    name="type"
                    value={newElement.type}
                    onChange={handleInputChange}
                    fullWidth
                >
                    <MenuItem value="text">Text</MenuItem>
                    <MenuItem value="password">Password</MenuItem>
                    <MenuItem value="color">Color Picker</MenuItem>
                    <MenuItem value="select">Dropdown</MenuItem>
                    <MenuItem value="button">Button</MenuItem>
                </TextField>

                {newElement.type === 'button' ? (
                    <TextField
                        label="Button Text"
                        name="buttonText"
                        value={newElement.buttonText}
                        onChange={handleInputChange}
                        fullWidth
                    />
                ) : (
                    <TextField
                        label="Placeholder/Text"
                        name="placeholder"
                        value={newElement.placeholder}
                        onChange={handleInputChange}
                        fullWidth
                    />
                )}


                    {newElement.type === 'button' && (
                        <>
                            <TextField
                                label="Button Background Color"
                                name="backgroundColor"
                                value={newElement.backgroundColor}
                                onChange={handleInputChange}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PaletteIcon />
                                        </InputAdornment>
                                    ),
                                    type: 'color',
                                }}
                            />
                            <TextField
                                label="Button Text Color"
                                name="textColor"
                                value={newElement.textColor}
                                onChange={handleInputChange}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PaletteIcon />
                                        </InputAdornment>
                                    ),
                                    type: 'color',
                                }}
                            />
                        </>
                    )}

                <TextField
                    label="Margin"
                    name="margin"
                    value={newElement.margin}
                    onChange={handleInputChange}
                    fullWidth
                />

                <TextField
                    label="Padding"
                    name="padding"
                    value={newElement.padding}
                    onChange={handleInputChange}
                    fullWidth
                />

                <TextField
                    label="X-Axis Position"
                    name="xAxis"
                    value={newElement.xAxis}
                    onChange={handleInputChange}
                    fullWidth
                />

                <TextField
                    label="Y-Axis Position"
                    name="yAxis"
                    value={newElement.yAxis}
                    onChange={handleInputChange}
                    fullWidth
                />

                <Button
                    variant="contained"
                    style={{ background: '#01A2D8', fontWeight: '600', padding: '10px', margin: '12px 0px' }}
                    onClick={handlePreviewElement}
                    fullWidth
                >
                    Preview Element
                </Button>
                <Button
                    variant="contained"
                    style={{ background: '#01A2D8', fontWeight: '600', padding: '10px', margin: '12px 0px' }}
                    onClick={handleAddElement}
                    fullWidth
                >
                    Add Element
                </Button>
            </div>

            <h3 className="text-xl font-semibold mb-4">Form Preview</h3>
            <div className="relative border rounded-md p-4 bg-gray-50 min-h-[300px]">
                {/* Preview Temporary Element */}
                {previewElement && (
                    <div
                        style={{
                            position: 'absolute',
                            left: previewElement.xAxis,
                            top: previewElement.yAxis,
                            margin: previewElement.margin,
                            padding: previewElement.padding,
                        }}
                    >
                        <FormElement
                            type={previewElement.type}
                            placeholder={previewElement.placeholder}
                            buttonText={previewElement.buttonText}
                            styles={{
                                backgroundColor: previewElement.backgroundColor,
                                color: previewElement.textColor,
                                margin: previewElement.margin,
                                padding: previewElement.padding,
                            }}
                        />
                    </div>
                )}

                {formElements.map((element, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            left: element.xAxis,
                            top: element.yAxis,
                            margin: element.margin,
                            padding: element.padding,
                        }}
                    >
                        <FormElement
                            type={element.type}
                            placeholder={element.placeholder}
                            buttonText={element.buttonText}
                            styles={{
                                backgroundColor: element.backgroundColor,
                                color: element.textColor,
                                margin: element.margin,
                                padding: element.padding,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DynamicForm;
