#include <pebble.h>
  //alexis commit

static Window *window;
static TextLayer *text_layer;

static void click_config_provider(void *context) {
  window_single_click_subscribe(BUTTON_ID_SELECT, select_click_handler);
  window_long_click_subscribe(BUTTON_ID_SELECT, 1000, select_long_click_handler, select_long_click_release_handler);
  window_single_click_subscribe(BUTTON_ID_UP, up_click_handler);
  window_single_click_subscribe(BUTTON_ID_DOWN, down_click_handler);
}

static void select_click_handler(ClickRecognizerRef recognizer, void *context) {
  // Go to contacts JS menu
}

static void select_long_click_handler(ClickRecognizerRef recognizer, void *context) {
  // Go to emergency JS menu and do emergency stuff
}

static void up_click_handler(ClickRecognizerRef recognizer, void *context) {
  // Go to pills JS menu
}

static void down_click_handler(ClickRecognizerRef recognizer, void *context) {
  // Go to goals JS menu
}

static void window_load(Window *window) {
  Layer *window_layer = window_get_root_layer(window);
  GRect bounds = layer_get_bounds(window_layer);

  text_layer = text_layer_create((GRect) { .origin = { 0, 72 }, .size = { bounds.size.w, 20 } });
  text_layer_set_text(text_layer, "Press UP Button for your the Pill List.\nPress SELECT (middle) Button for Contacts.\nPress DOWN button for Goals.\nHold SELECT for emergencies.");
  text_layer_set_text_alignment(text_layer, GTextAlignmentCenter);
  layer_add_child(window_layer, text_layer_get_layer(text_layer));
}

static void window_unload(Window *window) {
  text_layer_destroy(text_layer);
}

static void init(void) {
  window = window_create();
  window_set_click_config_provider(window, click_config_provider);
  window_set_window_handlers(window, (WindowHandlers) {
    .load = window_load,
    .unload = window_unload,
  });
  const bool animated = true;
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
