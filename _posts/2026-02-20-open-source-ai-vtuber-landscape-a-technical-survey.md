---
layout: post
title: "Open Source AI VTuber Landscape: A Technical Survey"
date: 2026-02-20
tags: [technical, vtuber]
---

This post surveys the open-source AI VTuber stack from a systems view.
The goal is to break down the pipeline and highlight practical tradeoffs.

## Typical end-to-end pipeline

1. ASR: speech-to-text in near real time.
2. Dialogue: LLM-based response planning and style control.
3. TTS: low-latency voice generation with stable identity.
4. Avatar control: expression, mouth shape, and motion mapping.
5. Streaming loop: orchestration, monitoring, and fallback handling.

## Main engineering bottlenecks

- Latency budget across ASR, LLM, and TTS
- Voice consistency across long sessions
- Emotion control without prompt instability
- Runtime reliability in live environments

## Design directions that look promising

- adaptive short/long context windows
- multi-agent memory separation (persona vs session facts)
- async event pipelines for non-blocking avatar control
- quality-of-service scheduling under compute limits

## Closing note

The open ecosystem is moving fast.
The most useful work right now is often integration work: combining imperfect components into a coherent, robust live system.

