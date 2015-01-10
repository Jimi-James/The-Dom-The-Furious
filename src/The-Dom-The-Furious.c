#include <pebble.h>
  //alexis commit

static const bool animated = true;
static Window *window;
static TextLayer *text_layer;
static Window *pills;
static TextLayer *pills_text;
static Window *contacts;
static TextLayer *contacts_text;
static Window *goals;
static TextLayer *goals_text;
static Window *emergency;
static TextLayer *emergency_text;

static void window_load(Window *window) {
  GRect bounds = layer_get_bounds(window_layer);
}

static void window_unload(Window *window) {
  text_layer_destroy(text_layer);
}

static void window_setup (Window *window, TextLayer *text_layer) {
  window_load(window);
  Layer *window_layer = window_get_root_layer(window);
  layer_add_child(window_layer, text_layer_get_layer(text_layer));
}

static void click_config_provider(void *context) {
  window_single_click_subscribe(BUTTON_ID_SELECT, select_click_handler);
  window_long_click_subscribe(BUTTON_ID_SELECT, 1000, select_long_click_handler, select_long_click_release_handler);
  window_single_click_subscribe(BUTTON_ID_UP, up_click_handler);
  window_single_click_subscribe(BUTTON_ID_DOWN, down_click_handler);
  window_single_click_subscribe(BUTTON_ID_BACK, back_click_handler);
}

static void select_click_handler(ClickRecognizerRef recognizer, void *context) {
  // Check which window is currently running and switch to appropriate window
  Window *check = window_stack_get_top_window();
  if (check == window) {

  } else if (check == pills) {

  } else if (check == contacts) {

  } else if (check == goals) {

  } else if (check == emergency) {

  }
}

static void select_long_click_handler(ClickRecognizerRef recognizer, void *context) {
  window_stack_push (emergency, animated);
  // Do emergency stuff here--not implemented for hackathon so that we don't call 911 during a hackathon or something
}

static void up_click_handler(ClickRecognizerRef recognizer, void *context) {
  // Check which window is currently running and switch to appropriate window
  Window *check = window_stack_get_top_window();
  if (check == window) {

  } else if (check == pills) {

  } else if (check == contacts) {

  } else if (check == goals) {

  } else if (check == emergency) {

  }
}

static void down_click_handler(ClickRecognizerRef recognizer, void *context) {
  // Check which window is currently running and switch to appropriate window
  Window *check = window_stack_get_top_window();
  if (check == window) {

  } else if (check == pills) {

  } else if (check == contacts) {

  } else if (check == goals) {

  } else if (check == emergency) {

  }
}

static void back_click_handler(ClickRecognizerRef recognizer, void *context) {
  window_stack_pop (animated);
}

static void init(void) {
  window = window_create();
  window_set_click_config_provider(window, click_config_provider);
  window_set_window_handlers(window, (WindowHandlers) {
    .load = window_load,
    .unload = window_unload,
  });
  text_layer = text_layer_create((GRect) { .origin = { 0, 72 }, .size = { bounds.size.w, 20 } });
  text_layer_set_text_alignment(text_layer, GTextAlignmentCenter);
  text_layer_set_text(text_layer, "Press UP Button for your the Pill List.\nPress SELECT (middle) Button for Contacts.\nPress DOWN button for Goals.\nHold SELECT for emergencies.");
  window_setup (window, text_layer);
  pills = window_create();
  window_set_click_config_provider(pills, click_config_provider);
  window_set_window_handlers(pills, (WindowHandlers) {
    .load = window_load,
    .unload = window_unload,
  });
  pills_text = text_layer_create((GRect) { .origin = { 0, 72 }, .size = { bounds.size.w, 20 } });
  text_layer_set_text_alignment(pills_text, GTextAlignmentCenter);
  text_layer_set_text(pills_text, "pills text");
  window_setup (pills, pills_text);
  contacts = window_create();
  window_set_click_config_provider(contacts, click_config_provider);
  window_set_window_handlers(contacts, (WindowHandlers) {
    .load = window_load,
    .unload = window_unload,
  });
  contacts_text = text_layer_create((GRect) { .origin = { 0, 72 }, .size = { bounds.size.w, 20 } });
  text_layer_set_text_alignment(contacts_text, GTextAlignmentCenter);
  text_layer_set_text(contacts_text, "contacts text");
  window_setup (contacts, contacts_text);
  goals = window_create();
  window_set_click_config_provider(goals, click_config_provider);
  window_set_window_handlers(goals, (WindowHandlers) {
    .load = window_load,
    .unload = window_unload,
  });
  goals_text = text_layer_create((GRect) { .origin = { 0, 72 }, .size = { bounds.size.w, 20 } });
  text_layer_set_text_alignment(goals_text, GTextAlignmentCenter);
  text_layer_set_text(goals_text, "goals text");
  window_setup (goals, goals_text);
  emergency = window_create();
  window_set_click_config_provider(emergency, click_config_provider);
  window_set_window_handlers(emergency, (WindowHandlers) {
    .load = window_load,
    .unload = window_unload,
  });
  emergency_text = text_layer_create((GRect) { .origin = { 0, 72 }, .size = { bounds.size.w, 20 } });
  text_layer_set_text_alignment(emergency_text, GTextAlignmentCenter);
  text_layer_set_text(emergency_text, "emergency text");
  window_setup (emergency, emergency_text);
  window_set_click_config_provider(&window, (ClickConfigProvider) click_config_provider);
  window_set_click_config_provider(&pills, (ClickConfigProvider) click_config_provider);
  window_set_click_config_provider(&contacts, (ClickConfigProvider) click_config_provider);
  window_set_click_config_provider(&goals, (ClickConfigProvider) click_config_provider);
  window_set_click_config_provider(&emergency, (ClickConfigProvider) click_config_provider);
  window_stack_push(window, animated);
}

static void deinit(void) {
  window_destroy(window);
}

int main(void) {
  init();

  APP_LOG(APP_LOG_LEVEL_DEBUG, "Done initializing, pushed window: %p", window);

  app_event_loop();
  deinit();
}
