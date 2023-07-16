import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { Input } from 'antd';
import axios from 'axios';
import moment from 'moment-jalaali';
import styles from './styles.module.css';
const { Search } = Input;
function TableReportOrder() {
    const [reportorder, setreportorder] = useState([]);

    useEffect(() => {
        // Fetch all wallets
        axios.get('https://api.maaleksho.ir/Order/GetAllOrder')
            .then((res) => {
                setreportorder(res.data);
            })
            .catch(error => {
            });
    }, []);

    const [search, setSearch] = useState('')
    const [loading, setloading] = useState(false)

    const handleSearch = (value) => {
        setSearch(value);
    };

    const handleLoading = () => {
        setloading(!loading)
    }
    const tableStyles = {
        color: 'black',
    };
    const columns = [
        {
            title: 'نام پروژه',
            dataIndex: 'nameProject',
            key: 'nameProject',
            render: (text) => <a style={tableStyles}>{text}</a>,
            width: 150,
        },
        {
            title: 'نام مشتری',
            dataIndex: 'fullName',
            key: 'fullName',

        },
        {
            title: 'تاریخ',
            dataIndex: 'date',
            key: 'date',
            ellipsis: true,
        },
        {
            title: 'تعداد',
            dataIndex: 'Number',
            key: 'Number',
            ellipsis: true,
        },
        {
            title: 'مقدار',
            dataIndex: 'amount',
            key: 'amount',
            ellipsis: true,
        },
        {
            title: 'نوع',
            dataIndex: 'type',
            key: 'type',
            ellipsis: true,
        },
        {
            title: 'نتیجه',
            dataIndex: 'result',
            key: 'result',
            ellipsis: true,
        },
    ];
    const data = reportorder.map((item) => {
        const jalaliDate = moment(item.registerDate, 'YYYY-M-D').format('jYYYY-jM-jD');
        return {
            key: item.id,
            nameProject: `${item.securitiesName}`,
            fullName: `${item.userFirstName} ${item.userLastName}`,
            usercode: item.userCode,
            date: jalaliDate,
            Number: item.volume && item.volume.toLocaleString(),
            amount: item.value && item.value.toLocaleString(),
            type: `${item.orderTypeName}`,
            result: item.result,
            tags: ['nice', 'developer'],
        };
    });
    const filteredData = data.filter((record) =>
        record.fullName.toString().toLowerCase().includes(search.toLowerCase()));
    const paginationOptions = {
        pageSize: 5,
    };

    return (
        <>
            <div className="search-Rtl">
                <Search
                    onSearch={handleSearch}
                    placeholder="نام مورد نظر را وارد کنید"
                    loading={loading}
                    onChange={handleLoading}
                    enterButton
                />
            </div>

            <Table columns={columns} dataSource={filteredData} pagination={paginationOptions} rowClassName={(record, index) => {
                if (index % 2 === 0) {
                    return styles['even-row'];
                } else {
                    return styles['odd-row'];
                }
            }}
                onRow={(record) => {
                    if (record.result === 'خرید') {
                        return {
                            className: styles['red-row'],
                        };
                    }
                }} />

        </>
    )
}

export default TableReportOrder