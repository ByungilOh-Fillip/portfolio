---
title: "AI:RE"
category: "game"
status: "completed"
period:
  start: "2026-01"
  end: "2026-08"
role:
  - "Unreal Engine"
  - "C++"
team:
  size: 4
featured: true
order: 1
github: "https://github.com/example/aire"
blog: "https://velog.io/@example/aire"
---

# AI:RE (더미 프로젝트)

## Overview
AI:RE는 어쩌고 저쩌고 하는 게임입니다. 이 프로젝트는 인공지능 요소와 생존 요소를 결합한 혁신적인 장르를 목표로 개발되었습니다.

## Problem Solving
**문제:** StateTree Evaluator가 언리얼 에디터에서 보이지 않는 현상 발생.

**원인 분석:** USTRUCT 리플렉션 및 링커 최적화 과정에서 코드가 누락되는 빌드 설정 문제로 파악됨.

**해결 방안:** 적절한 빌드 모듈 설정과 리플렉션 매크로를 수정하여 에디터에 정상적으로 노출되도록 구현 완료.
