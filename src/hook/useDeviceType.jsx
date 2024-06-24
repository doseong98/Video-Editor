import React, { useState, useLayoutEffect } from 'react';

const useDeviceType = () => {
  const [deviceType, setdeviceType] = useState('pc');

  let screenWidth = window.innerWidth;

  const updateDeviceType = () => {
    screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      setdeviceType('mobile')
    }
    if (screenWidth > 768 && screenWidth <= 1024) {
      setdeviceType('tablet')
    }
    if (screenWidth > 1024) {
      setdeviceType('pc')
    }
  }
  // 브라우저가 화면을 그리기전에 레이아웃을 측정하는 훅
  useLayoutEffect(() => {
    updateDeviceType();
    window.addEventListener('resize', updateDeviceType)

    return () => {
      window.removeEventListener('resize', updateDeviceType)
    }
  }, [deviceType])

  return deviceType;
}

export default useDeviceType