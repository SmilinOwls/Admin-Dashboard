import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import { UploadOutlined, SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Table, Popconfirm, Form, Input, Typography, Image, Upload, Button, Space, InputNumber, DatePicker } from 'antd';
import Highlighter from 'react-highlight-words';
import dayjs from 'dayjs';
import AddRoom from './AddRoom';

function Room() {
    const dateFormat = "MM/DD/YYYY HH:mm";
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
        img: [{
            uid: '-1',
            name: 'image.png',
            status: 'done',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
        type: 'Type I',
        offer: 'Offer I',
        service: 'Service I',
        checkin: dayjs('06/12/2023 12:00', dateFormat),
        checkout: dayjs('07/12/2023 8:00', dateFormat),
        cost: 1,
        bedroom: 1,
        guest: 1
    },
    {
        key: 2,
        name: `Name II`,
        img: [{
            uid: '-1',
            name: 'image.png',
            status: 'done',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
        type: 'Type II',
        offer: 'Offer II',
        service: 'Service II',
        checkin: dayjs('07/12/2023 12:00', dateFormat),
        checkout: dayjs('08/12/2023 8:00', dateFormat),
        cost: 2,
        bedroom: 2,
        guest: 2
    },
    ]);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;
    const edit = (record) => {
        form.setFieldsValue({
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
        
        //  axios handler goes here (PUT)

    };
    const handleDelete = (key) => {
        const newData = data.filter((item) => item.key !== key);
        setData(newData);

        //  axios handler goes here (DELETE)
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
        var inputNode = ["cost", "bedroom", "guest"].indexOf(dataIndex) === -1 ? <Input /> : <InputNumber />;
        switch (dataIndex) {
            case "checkin":
                inputNode = <DatePicker showTime format={dateFormat} />;
                break;
            case "checkout":
                inputNode = <DatePicker showTime format={dateFormat} />;
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
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if ((
                                            dataIndex === "checkout" &&
                                            dayjs(getFieldValue('checkin')) &&
                                            dayjs(getFieldValue('checkin')) > dayjs(value))
                                        ||
                                        (
                                            dataIndex === "checkin" &&
                                            dayjs(getFieldValue('checkout')) &&
                                            dayjs(getFieldValue('checkout')) < dayjs(value)
                                        )) {
                                        return Promise.reject(new Error('The checkout date must be greater than checkin!'));
                                    }

                                    return Promise.resolve();
                                },
                            }),
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
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('name')
        },
        {
            title: "Image",
            dataIndex: "img",
            editable: true,
            width: "10%",
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
            title: "Type",
            dataIndex: "type",
            editable: true,
            width: "7%",
            ...getColumnSearchProps('type')
        },
        {
            title: "Offer",
            dataIndex: "offer",
            editable: true,
            width: "7%",
            ...getColumnSearchProps('offer')
        },
        {
            title: "Service",
            dataIndex: "service",
            editable: true,
            width: "7%",
            ...getColumnSearchProps('service'),

        },
        {
            title: "Checkin",
            dataIndex: "checkin",
            editable: true,
            width: "8%",
            sorter: (a, b) => a.checkin > b.checkin,
            sortDirections: ['ascend', 'descend'],
            render: (value, _) => {
                return <p>{value.toDate().toLocaleString()}</p>
            }
        },
        {
            title: "Checkout",
            dataIndex: "checkout",
            editable: true,
            width: "8%",
            sorter: (a, b) => a.checkout > b.checkout,
            sortDirections: ['ascend', 'descend'],
            render: (value, _) => {
                return <p>{value.toDate().toLocaleString()}</p>
            }
        },
        {
            title: "Cost",
            dataIndex: "cost",
            editable: true,
            min: 0,
            width: "8%",
            sorter: (a, b) => a.cost > b.cost,
            sortDirections: ['ascend', 'descend']
        },
        {
            title: "Bedroom",
            dataIndex: "bedroom",
            editable: true,
            width: "8%",
            sorter: (a, b) => a.bedroom > b.bedroom,
            sortDirections: ['ascend', 'descend']
        },
        {
            title: "Guest",
            dataIndex: "guest",
            editable: true,
            width: "8%",
            sorter: (a, b) => a.guest > b.guest,
            sortDirections: ['ascend', 'descend']
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            colSpan: 2,
            fixed: "right",
            width: "8%",
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span className='row'>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                                textAlign: "center"
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm
                            title="Sure to cancel?"
                            onConfirm={cancel}
                        >
                            <span style={{ cursor: "pointer", textAlign: "center" }} >Cancel</span>
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
            fixed: "right",
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
                        <h3 className='my-2'>Room List</h3>
                        <button className='btn btn-primary rounded-3' onClick={() => setIsAdd(!isAdd)}>Add Room</button>
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
                            scroll={{
                                x: 1500,
                                y: 300,
                            }}
                        />
                    </Form>
                </>
            ) :
                (
                    <>
                        <div
                            className='text-primary mb-3 d-flex align-items-center'
                            style={{ cursor: "pointer" }}
                            onClick={() => setIsAdd(false)}
                        >
                            <ArrowLeftOutlined /><span className='ms-2'>Back to Room List</span>
                        </div>
                        <AddRoom />
                    </>)
            }
        </div>
    )
}

export default Room