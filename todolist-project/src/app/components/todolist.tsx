"use client";

import React from "react";
import {
  Divider,
  List,
  Typography,
  Input,
  Space,
  Button,
  Flex,
  Tooltip,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Yellowtail } from "next/font/google";

export default function TodoList() {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <>
      <div style={{ display: "flex" }}>
        <Input
          placeholder="To Do Some Thing"
          style={{ margin: "10px", width: "100%" }}
        />
        <Button type="primary" style={{ margin: "10px" }}>
          Add
        </Button>
        <Tooltip title="search">
          <Button
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
            style={{ margin: "10px 10px 10px 0px" }}
          />
        </Tooltip>
      </div>

      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {" "}
              <div>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </div>
              <Flex gap="small">
                <Button style={{ background: "#FFBF00" }}>Edit</Button>
                <Button type="primary" danger>
                  Delete
                </Button>
              </Flex>
            </div>
          </List.Item>
        )}
      />
    </>
  );
}
