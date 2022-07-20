import React from "react";
// @import dependencies
import { Space, Tooltip, Button, Table } from "antd";
import { EditFilled } from "@ant-design/icons";

export const ProductListing = props => {
  const getRowActionsMenu = (_, record) => {
    const { updateProduct } = props;
    return (
      <div key={record?.id} style={{ float: "right" }}>
        <Space
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
          size={0}
        >
          <Tooltip title="Edit">
            <Button
              onClick={() => {
                updateProduct(record);
              }}
              size="small"
              type="link"
              icon={<EditFilled />}
            />
          </Tooltip>
        </Space>
      </div>
    );
  };
  const getTableColumn = () => {
    return [
      {
        title: "Product Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: e => `$${e}`
      },
      { title: "Description", dataIndex: "description", key: "description" },
      { title: "Inventory Date", dataIndex: "date", key: "date" },
      {
        title: "Action",
        key: "action",
        fixed: "right",
        align: "center",
        render: getRowActionsMenu
      }
    ];
  };
  return (
    <>
      <Table
        loading={props?.loading}
        scroll={{ x: "auto" }}
        columns={getTableColumn()}
        dataSource={props?.productsData || []}
      />
    </>
  );
};
