---
title: 阶段 3：装甲板识别
description: 从图像预处理走到目标角点与类别输出
updated: 2026-08-16
---

# 阶段 3：装甲板识别

## 目标

理解传统视觉和学习型检测的角色，构建可观察、可调试的装甲板识别流水线。

## 必读

- [RoboMaster 视觉综述](/blog/imported/sjtu/2020-09-05-vision-learning-1-overview)
- [装甲板调参经验](/blog/imported/sjtu/2023-05-16-rm-cv-std-how-to-adjust-parameters)
- [深度学习专题](/knowledge/deep-learning)

## 实践任务

在给定视频上输出灯条、候选装甲板、四角点和类别；保留中间二值图、候选筛选数量和耗时统计。

## 完成标准

程序能离线处理测试视频，输出可视化结果与失败样例；文档说明每个阈值影响哪一步。

下一阶段：[PnP 与坐标系](/learning-path/stage-4)。
