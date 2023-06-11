import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import { UploadOutlined, SearchOutlined } from '@ant-design/icons';
import { Table, Popconfirm, Form, Input, Typography, Image, Upload, Button, Space, InputNumber, Rate } from 'antd';
import Highlighter from 'react-highlight-words';
import AddPlace from './AddPlace';

function Place() {
    // Search 
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (confirm, clearFilters) => {
        clearFilters();
        setSearchText('');
        confirm();
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => {
            return (
                <div
                    style={{
                        padding: 8,
                    }}
                    onKeyDown={(e) => e.stopPropagation()}
                >
                    <Input
                        placeholder={`Search ${dataIndex}`}
                        value={selectedKeys[0]}
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        style={{
                            marginBottom: 8,
                            display: 'block',
                        }}
                    />
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{
                                width: 90,
                            }}
                        >
                            Search
                        </Button>
                        <Button
                            onClick={() => clearFilters && handleReset(confirm, clearFilters)}
                            size="small"
                            style={{
                                width: 90,
                            }}
                        >
                            Reset
                        </Button>
                        <Button
                            type="link"
                            size="small"
                            onClick={() => {
                                close();
                            }}
                        >
                            Close
                        </Button>
                    </Space>
                </div>
            )
        },
        filterIcon: (filtered) => {
            return (
                <SearchOutlined
                    style={{
                        color: filtered ? '#1677ff' : undefined,
                    }}
                />
            )
        },
        onFilter: (value, record) => {
            return record[dataIndex].toString().toLowerCase().includes(value.toLowerCase());
        },
        render: (text) => {
            return (
                searchedColumn === dataIndex ?
                    <Highlighter
                        highlightStyle={{
                            backgroundColor: '#ffc069',
                            padding: 0,
                        }}

                        searchWords={[searchText]}
                        autoEscape
                        textToHighlight={text ? text.toString() : ''}
                    /> : (text)
            )
        }

    });

    const [form] = Form.useForm();
    const [isAdd, setIsAdd] = useState(false);
    const [data, setData] = useState([{
        key: 1,
        name: `Name I`,
        address: 'Adresss I',
        identifier: 'ID I',
        img: [{
            uid: '-1',
            name: 'image.png',
            status: 'done',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
        description: 'Description I',
        addition: 'Addition I',
        rating: 4,
    },
    {
        key: 2,
        name: `Name II`,
        address: 'Adresss II',
        identifier: 'ID II',
        img: [{
            uid: '-1',
            name: 'image.png',
            status: 'done',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
        description: 'Description II',
        addition: 'Addition II',
        rating: 5,
    },
    ]);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;
    const edit = (record) => {
        form.setFieldsValue({
            title: '',
            content: '',
            ...record,
        });
        setEditingKey(record.key);
    };
    const cancel = () => {
        setEditingKey('');
    };
    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }

    };
    const handleDelete = (key) => {
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
    };
    const normfile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const EditableCell = ({
        editing,
        dataIndex,
        title,
        record,
        index,
        children,
        ...restProps
    }) => {
        var inputNode = <Input />;
        switch (dataIndex) {
            case "rating":
                inputNode = <Rate />;
                break;
            case "img":
                inputNode =
                    <Upload
                        listType="picture-card"
                        beforeUpload={() => false}
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>;
                break;
            default:
                break;
        }

        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        getValueFromEvent={dataIndex === "img" ? normfile : null}
                        valuePropName={dataIndex === "img" ? "fileList" : "value"}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };
    const columns = [
        {
            title: "SNo",
            dataIndex: "key",
            width: "5%"
        },
        {
            title: "Name",
            dataIndex: "name",
            editable: true,
            width: "10%",
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('name')
        },
        {
            title: "Address",
            dataIndex: "address",
            editable: true,
            width: "15%",
            ...getColumnSearchProps('content')
        },
        {
            title: "Identifier",
            dataIndex: "identifier",
            editable: true,
            width: "10%",
            ...getColumnSearchProps('identifier')
        },
        {
            title: "Image",
            dataIndex: "img",
            editable: true,
            width: "20%",
            render: (imgs, _) => {
                return (
                    <div className='row'>
                        {imgs.map((img, idx) =>
                            <div className='col-3 me-2'>
                                <Image className='me-2' key={idx} width={50} height={50} src={img.thumbUrl} />
                            </div>)}
                    </div>
                )
            }
        },
        {
            title: "Description",
            dataIndex: "description",
            editable: true,
            width: "15%",
            ...getColumnSearchProps('description')
        },
        {
            title: "Rating",
            dataIndex: "rating",
            editable: true,
            width: "5%",
            sorter: (a, b) => a.rating > b.rating,
            sortDirections: ['ascend', 'descend'],
            filters: [{
                text: 1,
                value: 1
            },
            {
                text: 2,
                value: 2
            },
            {
                text: 3,
                value: 3
            },
            {
                text: 4,
                value: 4
            },
            {
                text: 5,
                value: 5
            }
            ],
            onFilter: (value, record) => {
                return record.rating === value;
            },
            render: (value) => (
                <Rate value={value} className='fs-5'/>
            )
        },
        {
            title: "Addition",
            dataIndex: "addition",
            editable: true,
            width: "10%",
            ...getColumnSearchProps('addition')
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            colSpan: 2,
            width: "8%",
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span className='row'>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <span style={{ cursor: "pointer" }}>Cancel</span>
                        </Popconfirm>
                    </span>
                ) : (
                    <span>
                        {data.length >= 1 ? (
                            <>
                                <span className='d-flex justify-content-center'>
                                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                                        <span style={{ cursor: "pointer" }}>Edit</span>
                                    </Typography.Link>
                                </span>
                            </>
                        ) : null}
                    </span>
                );
            },
        },
        {
            title: 'Action',
            dataIndex: 'action',
            colSpan: 0,
            render: (_, record) => {
                return (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <span className='text-primary' style={{ cursor: "pointer" }}>Delete</span>
                    </Popconfirm>
                )
            }
        }
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <div className='mt-3'>
            {!isAdd ? (
                <>
                    <div className='d-flex justify-content-between mb-3'>
                        <h3 className='my-2'>Place List</h3>
                        <button className='btn btn-primary rounded-3' onClick={() => setIsAdd(!isAdd)}>Add Place</button>
                    </div>
                    <Form form={form} component={false}>
                        <Table
                            components={{
                                body: {
                                    cell: EditableCell,
                                },
                            }}
                            bordered
                            dataSource={data}
                            columns={mergedColumns}
                            rowClassName="editable-row"
                            pagination={{
                                onChange: cancel,
                            }}
                        />
                    </Form>
                </>
            ) : <AddPlace/>}
        </div>
    )
}

export default Place