'use strict'

let features = document.querySelector('.features'),
    company = document.querySelector('.company'),
    arrowFeatures = document.querySelector('#arrow'),
    arrowFeatures2 = document.querySelector('#arrow2'),
    arrowFeatures3 = document.querySelector('#arrow3'),
    arrowFeatures4 = document.querySelector('#arrow4'),
    arrowCompany = document.querySelector('#arrowCompany'),
    arrowCompany2 = document.querySelector('#arrowCompany2'),
    arrowCompany3 = document.querySelector('#arrowCompany3'),
    arrowCompany4 = document.querySelector('#arrowCompany4'),

    featureMenu = document.querySelector('.features-menu'),
    featureMenuId = document.querySelector('#featureMenu2'),
    companyMenu = document.querySelector('.company-menu'),
    companyMenuId = document.querySelector('#companyMenu2'),
    togleMenu = document.querySelector('.togleMenu'),
    closeTogle = document.querySelector('.closeTogle'),
    openTogle = document.querySelector('.openTogle'),
    togleMenuOver = document.querySelector('.togleMenuOver'),
    mobileFeatureMenu = document.querySelector('.mobileFeatureMenu'),
    mobileCompanyMenu = document.querySelector('.mobileCompanyMenu');
    
    
    
    features.addEventListener('click', () => {
        arrowFeatures.classList.toggle('arrow-close');
        arrowFeatures2.classList.toggle('arrow-close');
        featureMenu.classList.toggle('dropdown')
    })
    company.addEventListener('click', () => {
        arrowCompany.classList.toggle('arrow-close');
        arrowCompany2.classList.toggle('arrow-close');
        companyMenu.classList.toggle('dropdown')
    })
    openTogle.addEventListener('click', () => {
        openTogle.classList.toggle('closeTogleIcon')
        openTogle.classList.toggle('openTogle')
        closeTogle.classList.toggle('closeTogleIcon')
        togleMenu.classList.toggle('showTogleMenu')
        togleMenuOver.classList.toggle('closeTogleIcon')
    })
    closeTogle.addEventListener('click', () => {
        closeTogle.classList.toggle('closeTogleIcon')
        openTogle.classList.toggle('closeTogleIcon')
        openTogle.classList.toggle('openTogle')
        togleMenu.classList.toggle('showTogleMenu')
        togleMenuOver.classList.toggle('closeTogleIcon')
    })

    
    togleMenuOver.addEventListener('click', () => {
        togleMenuOver.classList.toggle('closeTogleIcon')
        openTogle.classList.toggle('closeTogleIcon')
        closeTogle.classList.toggle('closeTogleIcon')
        togleMenu.classList.toggle('showTogleMenu')
    })

    mobileFeatureMenu.addEventListener('click', () => {
        arrowFeatures3.classList.toggle('mobileClose');
        arrowFeatures4.classList.toggle('mobileClose');
        featureMenuId.classList.toggle('mobileCloseMenu')
        mobileFeatureMenu.classList.toggle('activeTogleMenu')
    })
    mobileCompanyMenu.addEventListener('click', () => {
        arrowCompany3.classList.toggle('mobileClose');
        arrowCompany4.classList.toggle('mobileClose');
        companyMenuId.classList.toggle('mobileCloseMenu')
        mobileCompanyMenu.classList.toggle('activeTogleMenu')
    })