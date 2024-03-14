// SPDX-License-Identifier: GPL-3.0-or-later

#ifndef DAEMON_WATCHER_H
#define DAEMON_WATCHER_H

#include "libnetdata/libnetdata.h"

typedef enum {
    WATCHER_STEP_ID_CREATE_SHUTDOWN_FILE = 0,
    WATCHER_STEP_ID_DBENGINE_EXIT_MODE,
    WATCHER_STEP_ID_CLOSE_WEBRTC_CONNECTIONS,
    WATCHER_STEP_ID_DISABLE_MAINTENANCE_NEW_QUERIES_NEW_WEB_REQUESTS_NEW_STREAMING_CONNECTIONS_AND_ACLK,
    WATCHER_STEP_ID_STOP_MAINTENANCE_THREAD,
    WATCHER_STEP_ID_STOP_EXPORTERS_HEALTH_AND_WEB_SERVERS_THREADS,
    WATCHER_STEP_ID_STOP_COLLECTORS_AND_STREAMING_THREADS,
    WATCHER_STEP_ID_STOP_REPLICATION_THREADS,
    WATCHER_STEP_ID_PREPARE_METASYNC_SHUTDOWN,
    WATCHER_STEP_ID_DISABLE_ML_DETECTION_AND_TRAINING_THREADS,
    WATCHER_STEP_ID_STOP_CONTEXT_THREAD,
    WATCHER_STEP_ID_CLEAR_WEB_CLIENT_CACHE,
    WATCHER_STEP_ID_STOP_ACLK_THREADS,
    WATCHER_STEP_ID_STOP_ALL_REMAINING_WORKER_THREADS,
    WATCHER_STEP_ID_CANCEL_MAIN_THREADS,
    WATCHER_STEP_ID_FLUSH_DBENGINE_TIERS,
    WATCHER_STEP_ID_STOP_COLLECTION_FOR_ALL_HOSTS,
    WATCHER_STEP_ID_STOP_METASYNC_THREADS,
    WATCHER_STEP_ID_WAIT_FOR_DBENGINE_COLLECTORS_TO_FINISH,
    WATCHER_STEP_ID_WAIT_FOR_DBENGINE_MAIN_CACHE_TO_FINISH_FLUSHING,
    WATCHER_STEP_ID_STOP_DBENGINE_TIERS,
    WATCHER_STEP_ID_CLOSE_SQL_DATABASES,
    WATCHER_STEP_ID_REMOVE_PID_FILE,
    WATCHER_STEP_ID_FREE_OPENSSL_STRUCTURES,
    WATCHER_STEP_ID_REMOVE_INCOMPLETE_SHUTDOWN_FILE,

    // Always keep this as the last enum value
    WATCHER_STEP_ID_MAX
} watcher_step_id_t;

typedef struct {
    const char *msg;
    struct completion p;
} watcher_step_t;

extern watcher_step_t *watcher_steps;

void watcher_thread_start(void);
void watcher_thread_stop(void);

void watcher_shutdown_begin(void);
void watcher_shutdown_end(void);

void watcher_step_complete(watcher_step_id_t step_id);

#endif /* DAEMON_WATCHER_H */