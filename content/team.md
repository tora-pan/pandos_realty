---
title: "Meet the Team"
date: 2025-02-04
draft: false
description: "A 3-column grid showcasing images with details."
---

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.grid-item {
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.grid-item img {
  width: 300px;
  height: 300px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.grid-item:hover img {
  transform: scale(1.05);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
</style>

<div class="grid-container">
  {{< figure src="/images/team/travis_pandos.jpg" title="Founder | Lead Sales" caption="Description for Image 3" class="grid-item" >}}
  {{< figure src="/images/team/henry_chiu.png" title="Director of Acquisitions" caption="Description for Image 2" class="grid-item" >}}
  {{< figure src="/images/team/david_iwata.jpg" title="Director of Renovations" caption="Description for Image 1" class="grid-item" >}}
</div>
