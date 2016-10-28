/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/


export default
    angular.module('JobEventsListDefinition', [])
    .value('JobEventList', {

        name: 'jobevents',
        iterator: 'jobevent',
        editTitle: 'Job Events',
        index: false,
        hover: true,
        "class": "condensed",
        hasChildren: true,
        filterBy: '{ show: true }',

        navigationLinks: {
            //details: {
            //    href: '/#/jobs/{{ job_id }}',
            //    label: 'Status',
            //    icon: 'icon-zoom-in',
            //    ngShow: 'job_id !== null'
            //},
            events: {
                href: '/#/job_events/{{ job_id }}',
                label: 'Events',
                active: true,
                icon: 'icon-list-ul'
            },
            hosts: {
                href: '/#/job_host_summaries/{{ job_id }}',
                label: 'Host Summary',
                icon: 'icon-laptop'
            }
        },

        fields: {
            created: {
                label: 'Created On',
                columnClass: 'col-lg-1 col-md-1 hidden-sm hidden-xs',
                key: true,
                nosort: true,
                noLink: true
            },
            status: {
                label: 'Status',
                showValue: false,
                columnClass: 'col-sm-1 col-xs-2 text-center',
                nosort: true,
                ngClick: 'viewJobEvent(jobevent.id)',
                awToolTip: '{{ jobevent.statusBadgeToolTip }}',
                dataPlacement: 'top',
                badgeIcon: 'fa icon-job-{{ jobevent.status }}',
                badgePlacement: 'left',
                badgeToolTip: '{{ jobevent.statusBadgeToolTip }}',
                badgeTipPlacement: 'top',
                badgeNgClick: 'viewJobEvent(jobevent.id)'
            },
            event_display: {
                label: 'Event',
                hasChildren: true,
                ngClick: 'toggleChildren(jobevent.id, jobevent.related.children)',
                nosort: true,
                ngClass: '{{ jobevent.class }}',
                appendHTML: 'jobevent.event_detail'
            },
            host: {
                label: 'Host',
                ngBind: 'jobevent.summary_fields.host.name',
                ngHref: '{{ jobevent.hostLink }}',
                nosort: true,
                id: 'job-event-host-header',
                'class': 'break',
                columnClass: 'col-lg-2 hidden-sm hidden-xs'
            }
        },

        actions: {
            refresh: {
                mode: 'all',
                awToolTip: 'Refresh the page',
                ngClick: 'refresh()',
                actionClass: 'btn List-buttonDefault',
                buttonContent: 'REFRESH'
            }
        },

        fieldActions: {

            columnClass: 'col-sm-1 col-xs-2',

            view: {
                label: 'View',
                ngClick: 'viewJobEvent(jobevent.id)',
                awToolTip: 'View event details',
                dataPlacement: 'top'
            }
        }
    });
