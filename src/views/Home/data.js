import architect from "../../assets/images/certs/AWS-SolArchitect-Associate-2020.png"
import developer from "../../assets/images/certs/AWS-Developer-Associate-2020.png"
import comptia from "../../assets/images/certs/CompTIA_ITFund.png"

import aws from "../../assets/images/technologies/aws.png"
import docker from "../../assets/images/technologies/Moby-logo.png"

import django from "../../assets/images/technologies/django.png"
import js from "../../assets/images/technologies/js.png"
import python from "../../assets/images/technologies/python.png"
import react from "../../assets/images/technologies/react.png"
import ts from "../../assets/images/technologies/ts.png"
import gql from "../../assets/images/technologies/gql.png"


import github from "../../assets/images/social/github.png"


export const projects = [
  {
    title: "Altria Scan-Data Reporting",
    overview: "A lightweight application that could meet Altria's Scan-Data reporting requirements.",
    keyPoints: [
      "Automated Scan Data reporting of Tabacco products."
    ]
  },
  {
    title: "House of Spirits",
    overview: "A website to support online ordering and delivery for a Liqour store",
    keyPoints: [
      "Utilizes a hybrid architecture to sync inventory data between on-premises POS software and the cloud",
      "Built in support to handle deliveries and in-store pickups",
      "Automated sales tax reporting."
    ]
  },
]


export const certificates = [
  {
    name: "AWS Solutions Architect Associate",
    alt: "AWS Solutions Architect Associate Badge",
    src: architect
  },
  {
    name: "AWS Devloper Associate",
    alt: "AWS Devloper Associate Badge",
    src: developer
  },
  {
    name: "CompTIA IT Fundamentals",
    alt: "CompTIA IT Fundamentals Badge",
    src: comptia
  }
]

export const technologies = [
  {
    name: "Cloud & Container",
    images: [
      {
        name: "AWS",
        src: aws
      },
      {
        name: "Docker",
        src: docker
      },
    ],
  },
  {
    name: "Backend",
    images: [
      {
        name: "Django",
        src: django
      },
      {
        name: "Python",
        src: python
      },
    ]
  },
  {
    name: "Front End",
    images: [
      {
        name: "JavaScript",
        src: js
      },
      {
        name: "React Js",
        src: react
      },
      {
        name: "TypeScript",
        src: ts
      },
    ]
  },
  {
    name: "Other",
    images: [
      {
        name: "GraphQL",
        src: gql
      }
    ]
  },
]


export const socialMedia = [
  {
    name: "Github",
    src: github,
    url: "https://github.com/matt2102"
  }
]