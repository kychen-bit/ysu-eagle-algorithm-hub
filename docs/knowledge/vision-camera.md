---
title: 视觉与相机
description: OpenCV、相机模型、标定、坐标系与 PnP 资料
updated: 2026-08-16
---

# 视觉与相机

## 建议阅读

- [RoboMaster 视觉综述](/blog/imported/sjtu/2020-09-05-vision-learning-1-overview)
- [OpenCV 配置](/knowledge/imported/qd/environment_configuration/OpenCV)
- [相机标定](/knowledge/imported/qd/Project_Tutorial/camera_calibration)
- [相机外参标定](/knowledge/imported/qd/Project_Tutorial/Camera_extrinsic_calibration)
- [相机模型与标定课程](/blog/imported/sjtu/2021-10-10-vision-learning-2)

## 一条基本数据链

真实目标经过相机成像成为像素点；检测器输出角点；去畸变与 PnP 根据相机模型恢复目标相对相机的位姿；外参再把结果变换到云台或世界坐标系。任何一步坐标约定不一致，都会表现为“角度看起来差一点”。
