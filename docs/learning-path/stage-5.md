---
title: 阶段 5：预测与通信
description: 连接检测、解算、预测、控制与下位机通信
updated: 2026-08-16
---

# 阶段 5：预测与通信

## 目标

理解时间戳、延迟、滤波、运动模型和串口协议，把独立算法模块连接成稳定闭环。

## 必读

- [通信与部署专题](/knowledge/communication-deploy)
- [串口通信](/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/Serial_Communication)
- [项目手册模板](/projects/template)

## 实践任务

实现带帧头、长度、序号和校验的收发协议；记录端到端延迟；对一段目标轨迹完成基础滤波与短时预测。

## 完成标准

在丢包、粘包和异常数据条件下程序不会崩溃，日志可以定位通信与预测阶段的耗时。

下一阶段：[部署与维护](/learning-path/stage-6)。
