import React, { createContext, useContext } from 'react'

export const PagesContext = createContext({})

export const usePagesContext = () => useContext(PagesContext)

export const usePagesContextValue = () => [
  {
    'id': 1,
    'name': 'Home Page',
    'code': 'home',
    'seo': {
      'title': 'React Project Boilerplate',
      'keywords': null,
      'description': null
    }
  },
  {
    'id': 2,
    'name': 'About page',
    'code': 'about',
    'seo': {
      'title': 'About page',
      'keywords': 'About page keywords',
      'description': 'About page description'
    }
  },
  {
    'id': 3,
    'name': 'Contacts page',
    'code': 'contacts',
    'seo': {
      'title': 'Contacts page',
      'keywords': 'Contacts page keywords',
      'description': 'Contacts page description'
    }
  },
  {
    'id': 4,
    'name': 'Not found page',
    'code': 'not-found',
    'seo': {
      'title': 'Not found page',
      'keywords': null,
      'description': null
    }
  }
]
