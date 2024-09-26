import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import { items2 } from "../helpers/sider.helper";
const { Header, Content, Footer, Sider } = Layout;

const LayoutDefault = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log(items2);

  return (
    <Layout>
      {/* HEADER */}

      {/* CONTENT */}
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        {/* SIDER */}
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["Day6/bai:1"]}
              defaultOpenKeys={["Day6/4"]}
              style={{
                height: "100%",
              }}
              items={items2}
            />
          </Sider>

          {/*  Content */}
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
          {/* Content */}
        </Layout>
      </Content>

      {/* FOOTER */}
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Created by Hoang Gia Trong
      </Footer>
    </Layout>
  );
};
export default LayoutDefault;
