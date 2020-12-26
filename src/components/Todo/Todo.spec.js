import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo/Todo";

/**
 *
 * @param text {string}
 * @param date {Date}
 * @param status {boolean}
 * @return {{date, wrapper: Wrapper<Vue>, text, status}}
 */
function mount({ text, date, status } = {}) {
  const wrapper = shallowMount(Todo, {
    propsData: {
      text,
      date,
      status
    }
  });
  return {
    wrapper,
    text,
    date,
    status
  };
}

describe("Todo.vue", () => {
  describe("Mount", () => {
    it("renders todo", () => {
      const { text, date, wrapper } = mount({
        text: "My Todo",
        date: new Date(),
        status: false
      });
      expect(wrapper.find(".todo__text").text()).toMatch(text);
      expect(wrapper.find(".todo__date").text()).toMatch(
        date.toLocaleDateString()
      );
    });

    it("should render empty todo", () => {
      const { wrapper } = mount();
      expect(wrapper.find(".todo__text").text()).toMatch("Empty todo");
      expect(wrapper.find(".todo__date").text()).toMatch("Invalid Date");
    });

    it("displays error message for invalid date", () => {
      const { wrapper } = mount({
        date: "Not a date object"
      });
      expect(wrapper.find(".todo__date").text()).toMatch("Invalid Date");
    });
  });

  describe("Events", () => {
    it("emit toggle-status event", async () => {
      const { wrapper } = mount();
      await wrapper.find(".form-check-input").trigger("click");
      await wrapper.vm.$nextTick();
      expect(wrapper.emitted()["toggle-status"]).toEqual([[]]);
    });
  });
});
